import dynamic from "next/dynamic";

const DynamicMsgList = dynamic(() => import("../components/MsgList"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <h1>SIMPLE SNS</h1>
      <DynamicMsgList />
    </>
  );
};

export default Home;
