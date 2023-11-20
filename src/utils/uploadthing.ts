import { OurFileRouter } from "@/src/app/api/uploadthing/core";
import { generateComponents } from "@uploadthing/react";


export const { UploadButton, UploadDropzone, Uploader } =
    generateComponents<OurFileRouter>();