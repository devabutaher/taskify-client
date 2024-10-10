import { Button } from "@nextui-org/react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <h1 className="text-center text-8xl">
        Taski<span className="text-primary">fy</span>
      </h1>
      <Button color="primary" size="lg" className="rounded">
        Add New Task
      </Button>
    </div>
  );
};

export default App;
