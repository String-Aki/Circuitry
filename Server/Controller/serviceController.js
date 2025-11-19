import ServiceItem from "../models/ServiceItem.js";

//@desc Get all services/parts for the logged-in users
//@route GET /api/services

export const getServices = async (req, res) => {
  try {
    const services = await ServiceItem.find({ userId: req.auth.userId }).sort({
      name: 1,
    });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new service or part
// @route   POST /api/services

export const createService = async (req, res) => {
  const { name, description, buyPrice, sellPrice } = req.body;

  try {
    const newService = new ServiceItem({
      userId: res.auth.userId,
      name,
      description,
      buyPrice,
      sellPrice,
    });

    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc Delete a service (e.g., you stop selling a specific part)
//@route DELETE /api/service/:id

export const deleteService = async (req, res) => {
  try {
    const { id } = req.param;

    const deletedService = await ServiceItem.findOneAndDelete({
      _id: id,
      userId: req.auth.userId,
    });

    if (!deleteService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({ message: "Service Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
