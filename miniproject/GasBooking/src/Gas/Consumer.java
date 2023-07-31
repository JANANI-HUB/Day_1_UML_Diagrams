package Gas;
public class Consumer {
    private String consumerID;
    private String name;
    private String address;
    private String phone;
    private String gasName;
    private String usageDetails;

    // Constructor
    public Consumer(String consumerID, String name, String address, String phone, String gasName, String usageDetails) {
        this.consumerID = consumerID;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.gasName = gasName;
        this.usageDetails = usageDetails;
    }

    // Getters and Setters

    public String getConsumerID() {
        return consumerID;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getPhone() {
        return phone;
    }

    public String getGasName() {
        return gasName;
    }

    public String getUsageDetails() {
        return usageDetails;
    }

    // Override toString() method to display Consumer details
    @Override
    public String toString() {
        return "Consumer ID: " + consumerID +
                "\nName: " + name +
                "\nAddress: " + address +
                "\nPhone: " + phone +
                "\nGas Name: " + gasName +
                "\nUsage Details: " + usageDetails;
    }
}


