"use client";

import { UploadButton } from "@/src/utils/uploadthing";
import { FC, useState } from "react";
import toast from "react-hot-toast";

interface TProps {
    onChange: any
    value: any
}
const ImageUpload: FC<TProps> = (props) => {
    const { onChange, value } = props

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
                    toast.success("Upload Completed");
                    onChange(res[0].url)   
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