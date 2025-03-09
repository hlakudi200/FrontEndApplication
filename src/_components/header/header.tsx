import { Header } from "antd/es/layout/layout";

const CustomHeader = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Header
      style={{
        textAlign: "center",
        backgroundColor: "#101010",
        borderRadius: "10px",
        fontSize: "12px",
        display:"flex",
        flexDirection:'row',
        justifyContent:"flex-end",
      }}
    >
      {children}
    </Header>
  );
};

export default CustomHeader;
