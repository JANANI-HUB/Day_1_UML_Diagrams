package Gas;

public abstract class Person {
    private String consumerID;
    private String name;
    private String address;
    private String phone;

    // Constructor
    public Person(String consumerID, String name, String address, String phone) {
        this.consumerID = consumerID;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    // Abstract method to be implemented in subclasses
    public abstract String getDetails();

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
}
