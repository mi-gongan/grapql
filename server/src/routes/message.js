import { readDB, writeDB } from "../dbController.js";
import { v4 } from "uuid";

const getMsgs = () => readDB("messages");
const setMsgs = (msgs) => writeDB("messages", msgs);

const messagesRoute = [
  {
    //GET MESSAGES
    method: "get",
    route: "/messages",
    handler: (req, res) => {
      const msgs = getMsgs();
      res.send(msgs);
    },
  },
  {
    //GET MESSAGE
    method: "get",
    route: "/messages/:id",
    handler: ({ params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const msg = msgs.find((msg) => msg.id === id);
        if (!msg) throw "not found";
        res.send(msg);
      } catch (err) {
        res.status(404).send({ error: err });
      }
    },
  },
  {
    //CREATE MESSAGES
    method: "post",
    route: "/messages",
    handler: ({ body }, res) => {
      try {
        if (!body.userId) throw Error("no userId");
        const msgs = getMsgs();
        const newMsg = {
          id: v4(),
          text: body.text,
          userId: body.userId,
          timestamp: Date.now(),
        };
        msgs.unshift(newMsg);
        setMsgs(msgs);
        res.send(newMsg);
      } catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
  {
    //UPDATE MESSAGES
    method: "put",
    route: "/messages/:id",
    handler: ({ body, params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex((msg) => msg.id === id);
        if (targetIndex < 0) throw Error("메세지가 없습니다");
        if (msgs[targetIndex].userId !== body.userId)
          throw Error("사용자가 다릅니다");

        const newMsg = { ...msgs[targetIndex], text: body.text };
        msgs.splice(targetIndex, 1, newMsg);
        setMsgs(msgs);
        res.send(newMsg);
      } catch (err) {
        console.log(err);
        res.status(500).send({ error: err });
      }
    },
  },
  {
    //DELETE MESSAGES
    method: "delete",
    route: "/messages/:id",
    handler: ({ params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex((msg) => msg.id === id);
        console.log(targetIndex);
        if (targetIndex < 0) throw Error("메세지가 없습니다");
        msgs.splice(targetIndex, 1);
        setMsgs(msgs);
        res.send(id);
      } catch (err) {
        console.log(err);
        res.status(500).send({ error: err });
      }
    },
  },
];

export default messagesRoute;
