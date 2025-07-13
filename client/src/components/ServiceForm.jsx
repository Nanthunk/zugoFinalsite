import React, { useState, useEffect } from "react";

export default function ServiceForm({ onSave, initialData }) {
  const [form, setForm] = useState({ title: "", description: "", image: "" });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm({ title: "", description: "", image: "" });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className="service-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">{initialData ? "Update" : "Add"} Service</button>
    </form>
  );
}
