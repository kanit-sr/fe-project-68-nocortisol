"use client";
import deleteCompany from "@/libs/deleteCompany";
import { CompanyItem } from "../../../interfaces";

export default function DeleteCompanyPanel({
  company,
  token,
  onClose,
  onDeleted
}: {
  company: CompanyItem;
  token: string;
  onClose: () => void;
  onDeleted: () => void;
}) {

  const handleDelete = async () => {
    await deleteCompany(company.id, token);
    onDeleted();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
      <div
        className="rounded-2xl w-[90%] max-w-md px-10 py-8 relative shadow-lg text-center"
        style={{
          background: 'var(--surface)',
          color: 'var(--foreground)',
          border: '1px solid var(--surface-border)'
        }}
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl"
          style={{ color: 'var(--primary)' }}
        >
          ↩
        </button>

        {/* Title */}
        <h2
          className="text-3xl font-bold tracking-[0.2em] mb-5"
          style={{ color: 'var(--primary)' }}
        >
          Delete Company
        </h2>

        {/* Subtitle */}
        <p
          className="text-sm tracking-[0.15em] mb-6"
          style={{ color: 'var(--foreground)', opacity: 0.7 }}
        >
          Do you want to Delete company?
        </p>

        {/* Action */}
        <button
          onClick={handleDelete}
          className="px-10 py-2 rounded-lg font-bold tracking-[0.2em]"
          style={{
            background: 'var(--primary)',
            color: 'white',
            border: 'none'
          }}
        >
          Delete
        </button>

      </div>
    </div>
  );
}