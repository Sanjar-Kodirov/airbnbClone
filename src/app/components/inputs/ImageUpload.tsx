"use client";

import { UploadButton } from "@/src/utils/uploadthing";
import { FC, useState } from "react";

interface TProps {
    onChange: any
    value: any
}
const ImageUpload: FC<TProps> = () => {

    const [images, setImages] = useState<{
        fileUrl: string;
        fileKey: string;
    }[]>([])

    return (
        <main className="flex flex-col items-center justify-start p-24">
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </main>
    );
}
export default ImageUpload