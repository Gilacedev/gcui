import { useEffect } from "react";
import Button from "@/components/Button";
import ColorTypes from "@/components/functions/ColorTypes";
import AttachmentType from "@/types/Attachment";

const Attachment: React.FC<AttachmentType> = ({
  inputName,
  setFilesInForm,
  children,
  loading = false,
  files,
  setFiles,
}) => {
  
  useEffect(() => {
    setFilesInForm(files);
  }, [files, setFilesInForm]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_:any, i:any) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <div className="w-full">
      <input
        type="file"
        id={`file-input-${inputName}`}
        style={{ display: "none" }}
        onChange={handleFileChange}
        multiple
      />
      <div className="relative">
        {children}
        <div className="absolute left-2 bottom-2 flex gap-2">
          <Button
            type="button"
            onClick={() =>
              document.getElementById(`file-input-${inputName}`)?.click()
            }
          >
            <span className="fa fa-paperclip" />
          </Button>
          <Button
            type="submit"
            color={ColorTypes.primary}
            loading={loading ? 1 : 0}
          >
            <span className="far fa-paper-plane-top rotate-180"></span>
          </Button>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap pt-2">
        {files.map((file:File, index:number) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-indigo-800 p-2 text-xs rounded"
          >
            <span>{file.name}</span>
            <span
              className="fa fa-times cursor-pointer"
              onClick={() => removeFile(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attachment;
