import { useToast, toast } from "@/hooks/use-toast";

// Example usage of useToast or toast
const MyComponent = () => {
  const { toast } = useToast();

  // Trigger toast notification for testing
  const showToast = () => {
    toast({ description: "This is a test message" });
  };

  return <button onClick={showToast}>Show Toast</button>;
};

// Use the MyComponent somewhere in your code to avoid the unused variable error
const App = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <MyComponent />
    </div>
  );
};

export { App, MyComponent, useToast, toast };
