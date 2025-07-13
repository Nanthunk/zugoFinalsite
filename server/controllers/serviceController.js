import Service from "../models/Service.js";

export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch services" });
  }
};

export const addService = async (req, res) => {
  const { title, description, image } = req.body;
  try {
    const newService = new Service({ title, description, image });
    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(500).json({ message: "Failed to add service" });
  }
};

export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete service" });
  }
};
