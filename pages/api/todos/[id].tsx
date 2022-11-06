import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";
import todoModel from "../../../models/TodoModel";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    // Get a todo by its id
    case "GET":
      try {
        const todo = await todoModel.findById(id);
        if (!todo) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // Edit a model by its id
    case "PUT":
      try {
        const todo = await todoModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!todo) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // Delete a model by its id
    case "DELETE":
      try {
        const deletedTodo = await todoModel.deleteOne({ _id: id });
        if (!deletedTodo) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;
