import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";
import todoModel from "../../../models/TodoModel";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    // Get all todos
    case "GET":
      try {
        const todos = await todoModel.find({});
        res.status(200).json({ success: true, todos: todos });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    // Create a new todo
    case "POST":
      try {
        const todo = await todoModel.create(req.body);
        res.status(201).json({ success: true, data: todo });
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
