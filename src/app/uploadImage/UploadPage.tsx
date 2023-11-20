"use client";

import { UploadButton } from "@/src/utils/uploadthing";
import toast from "react-hot-toast";


export default function Home() {
    return (
        <main className="flex  flex-col items-center justify-between p-24">
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    toast.success("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </main>
    );
}