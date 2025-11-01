import React, { useState } from 'react';
import './drag.css';
import uploadIcon from '../assets/icon.png';

const DragAndUpload: React.FC = () => {
    const [preview, setPreview] = useState<string | null>(null);

    const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (typeof e.target?.result === 'string') {
                    setPreview(e.target.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
    };

    const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev: ProgressEvent<FileReader>) => {
                if (typeof ev.target?.result === 'string') {
                    setPreview(ev.target.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="hero">
            <label
                htmlFor="input-file"
                id="drop-area"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    id="input-file"
                    hidden
                    accept="image/*"
                    onChange={uploadImage}
                />

                <div id="img-view">
                    {preview ? (
                        <img src={preview} alt="uploaded" className="uploaded" />
                    ) : (
                        <>
                            <img src={uploadIcon} alt="upload icon" />
                            <p>
                                Drag and drop or Click here <br /> to upload image
                            </p>
                            <span>Upload any image from desktop</span>
                        </>
                    )}
                </div>
            </label>
        </div>
    );
};

export default DragAndUpload;