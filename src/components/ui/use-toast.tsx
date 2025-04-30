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

export { useToast, toast };
