// src/components/admin/HeroImageUploader.tsx

import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadProductImage, ProductImage } from '@/services/adminService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, UploadCloud } from 'lucide-react';
import { toast } from 'sonner';

interface HeroImageUploaderProps {
    variantId: number;
    currentHeroImage?: ProductImage;
}

const STORAGE_URL = import.meta.env.VITE_PUBLIC_STORAGE_URL;
const placeholderImage = "/images/placeholder.svg";

export const HeroImageUploader: React.FC<HeroImageUploaderProps> = ({ variantId, currentHeroImage }) => {
    const queryClient = useQueryClient();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const { mutate, isPending } = useMutation({
        mutationFn: (file: File) => uploadProductImage(variantId, { image: file, is_featured: true }),
        onSuccess: () => {
            toast.success("Gambar hero berhasil diperbarui.");
            queryClient.invalidateQueries({ queryKey: ['variant', variantId] });
            setSelectedFile(null);
        },
        onError: (error) => {
            toast.error("Gagal mengunggah gambar.");
            console.error(error);
        },
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (selectedFile) {
            mutate(selectedFile);
        } else {
            toast.warning("Pilih file gambar terlebih dahulu.");
        }
    };

    const imageUrl = currentHeroImage ? `${STORAGE_URL}${currentHeroImage.image}` : placeholderImage;

    return (
        <div className="flex flex-col gap-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold">Gambar Hero</h3>
            <div className="flex items-center gap-4">
                <div className="w-24 h-24 flex-none rounded-md overflow-hidden bg-gray-100">
                    <img src={imageUrl} alt="Gambar Hero Saat Ini" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <Input type="file" onChange={handleFileChange} className="w-full" accept="image/*" />
                    </div>
                    {selectedFile && <p className="text-sm text-muted-foreground mt-2">{selectedFile.name}</p>}
                </div>
            </div>
            <Button onClick={handleUploadClick} disabled={!selectedFile || isPending} className="w-full">
                {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <UploadCloud className="mr-2 h-4 w-4" />
                )}
                Unggah Gambar Hero
            </Button>
        </div>
    );
};