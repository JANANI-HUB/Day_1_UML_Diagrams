package Gas;

public class Consumer extends Person {
    private String gasName;
    private String usageDetails;

    // Constructor
    public Consumer(String consumerID, String name, String address, String phone, String gasName, String usageDetails) {
        super(consumerID, name, address, phone);
        this.gasName = gasName;
        this.usageDetails = usageDetails;
    }

    // Getters
    public String getGasName() {
        return gasName;
    }

    public String getUsageDetails() {
        return usageDetails;
    }

    // Implementing the abstract method
    @Override
    public String getDetails() {
        return "Consumer ID: " + getConsumerID() +
                "\nName: " + getName() +
                "\nAddress: " + getAddress() +
                "\nPhone: " + getPhone() +
                "\nGas Name: " + getGasName() +
                "\nUsage Details: " + getUsageDetails();
    }
}
