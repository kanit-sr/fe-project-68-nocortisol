"use client";
import { useState } from "react";
import updateCompany from "../../libs/updateCompany";
import { CompanyItem } from "../../../interfaces";

export default function UpdateCompanyPanel({
  company,
  token,
  onClose,
  onUpdated
}: {
  company: CompanyItem;
  token: string;
  onClose: () => void;
  onUpdated: () => void;
}) {
  const [name, setName] = useState(company.name);
  const [description, setDescription] = useState(company.description);
  const [website, setWebsite] = useState(company.website);
  const [tel, setTel] = useState(company.tel);
  const [address, setAddress] = useState(company.address);
  const [district, setDistrict] = useState(company.district);
  const [province, setProvince] = useState(company.province);
  const [postalcode, setPostalcode] = useState(company.postalcode);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await updateCompany(company.id, token, {
      name,
      description,
      website,
      tel,
      address,
      district,
      province,
      postalcode
    });

    onUpdated();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'rgba(0,0,0,0.4)' }}>
      <div
        className="rounded-2xl w-[90%] max-w-sm px-8 py-7 relative shadow-lg"
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
          className="text-2xl font-bold text-center tracking-[0.15em] mb-5"
          style={{ color: 'var(--primary)' }}
        >
          Update Company
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input value={name} onChange={e => setName(e.target.value)} placeholder="Name"
            className="rounded-md px-3 py-2 text-sm"
            style={{ border: '2px solid var(--primary)', background: 'var(--surface)', color: 'var(--foreground)' }} />

          <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"
            className="rounded-md px-3 py-2 text-sm"
            style={{ border: '2px solid var(--primary)', background: 'var(--surface)', color: 'var(--foreground)' }} />

          <input value={website} onChange={e => setWebsite(e.target.value)} placeholder="Website"
            className="rounded-md px-3 py-2 text-sm"
            style={{ border: '2px solid var(--primary)', background: 'var(--surface)', color: 'var(--foreground)' }} />

          <input value={tel} onChange={e => setTel(e.target.value)} placeholder="Telephone number"
            className="rounded-md px-3 py-2 text-sm"
            style={{ border: '2px solid var(--primary)', background: 'var(--surface)', color: 'var(--foreground)' }} />

          <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Address"
            className="rounded-md px-3 py-2 text-sm"
            style={{ border: '2px solid var(--primary)', background: 'var(--surface)', color: 'var(--foreground)' }} />

          <input value={district} onChange={e => setDistrict(e.target.value)} placeholder="District"
            className="rounded-md px-3 py-2 text-sm"
            style={{ border: '2px solid var(--primary)', background: 'var(--surface)', color: 'var(--foreground)' }} />

          <input value={province} onChange={e => setProvince(e.target.value)} placeholder="Province"
            className="rounded-md px-3 py-2 text-sm"
            style={{ border: '2px solid var(--primary)', background: 'var(--surface)', color: 'var(--foreground)' }} />

          <input value={postalcode} onChange={e => setPostalcode(e.target.value)} placeholder="Postal Code"
            className="rounded-md px-3 py-2 text-sm"
            style={{ border: '2px solid var(--primary)', background: 'var(--surface)', color: 'var(--foreground)' }} />

          {/* Upload */}
          <div className="flex flex-col items-center gap-2 mt-3">
            <span className="text-xs tracking-widest" style={{ color: 'var(--primary)' }}>
              Upload logo
            </span>
            <div className="rounded-md p-2" style={{ border: '2px solid var(--primary)' }}>
              ⬆
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="py-2 rounded-lg mt-4 font-bold tracking-[0.2em]"
            style={{ background: 'var(--primary)', color: 'white' }}
          >
            Update
          </button>

        </form>
      </div>
    </div>
  );
}