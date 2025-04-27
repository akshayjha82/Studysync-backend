class Logger {
    private static Logger instance;  // Singleton instance
    private static int instanceCount = 0;  // Tracks instance creation count

    // Private constructor prevents instantiation from outside the class
    private Logger() {
        instanceCount++;
        System.out.println("Logger instance created. Count: " + instanceCount);
    }

    // Lazy initialization - instance is created only when needed
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Logs a message
    public void logMessage(String message) {
        System.out.println("[LOG]: " + message);
    }
}

// Test class
public class Main {
    public static void main(String[] args) {
        System.out.println("Akshay Jha, SAP: 60009220103, Roll No. D010, Batch: D11");
        Logger logger1 = Logger.getInstance();
        logger1.logMessage("First log message");

        Logger logger2 = Logger.getInstance();
        logger2.logMessage("Second log message");

        // Verifying both references point to the same instance
        System.out.println("Are logger1 and logger2 the same? " + (logger1 == logger2));
    }
}
