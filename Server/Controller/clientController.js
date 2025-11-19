import Client from "../models/Client.js";

// @desc    Get all clients for the logged-in user
// @route   GET /api/clients
// @access  Private

export const getClients = async (res, req) => {
  try {
    const client = (await Client.find({ userId: req.auth.userId })).sort({
      createdAt: -1,
    });
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  const { name, email, phone, address } = req.body;

  try {
    const newClient = new Client({
      userId: req.auth.userId,
      name,
      email,
      phone,
      address,
    });

    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
