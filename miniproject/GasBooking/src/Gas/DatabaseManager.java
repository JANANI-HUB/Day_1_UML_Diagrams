package Gas;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

public class DatabaseManager {
    private static final String DATABASE_URL = "jdbc:mysql://127.0.0.1:3306/gasbooking";
    private static final String DATABASE_USERNAME = "root";
    private static final String DATABASE_PASSWORD = "Jan939291&";
    private static Connection connection;
    public static void connect() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            return;
        }

        connection = DriverManager.getConnection(DATABASE_URL, DATABASE_USERNAME, DATABASE_PASSWORD);
        createTablesIfNotExist();
    }


    public static void disconnect() throws SQLException {
        if (connection != null) {
            connection.close();
        }
    }

    private static void createTablesIfNotExist() throws SQLException {
        String createConsumersTableQuery = "CREATE TABLE IF NOT EXISTS consumers (" +
                "consumer_id INTEGER PRIMARY KEY," +
                "name TEXT," +
                "address TEXT," +
                "phone TEXT," +
                "gas_name TEXT," +
                "usage_details TEXT" +
                ");";

        String createBookingsTableQuery = "CREATE TABLE IF NOT EXISTS bookings (" +
                "consumer_id INTEGER," +
                "booking_id INTEGER," +
                "delivery_status TEXT," +
                "payment_status TEXT," +
                "PRIMARY KEY (consumer_id, booking_id)," +
                "FOREIGN KEY (consumer_id) REFERENCES consumers(consumer_id)" +
                ");";

        connection.createStatement().execute(createConsumersTableQuery);
        connection.createStatement().execute(createBookingsTableQuery);
    }

    public static void insertConsumer(Consumer consumer) throws SQLException {
        String insertQuery = "INSERT INTO consumers (consumer_id, name, address, phone, gas_name, usage_details) " +
                "VALUES (?, ?, ?, ?, ?, ?);";
        PreparedStatement statement = connection.prepareStatement(insertQuery);
        statement.setString(1, consumer.getConsumerID());
        statement.setString(2, consumer.getName());
        statement.setString(3, consumer.getAddress());
        statement.setString(4, consumer.getPhone());
        statement.setString(5, consumer.getGasName());
        statement.setString(6, consumer.getUsageDetails());
        statement.executeUpdate();
    }

    public static void insertBooking(Booking booking) throws SQLException {
        String insertQuery = "INSERT INTO bookings (consumer_id, booking_id, delivery_status, payment_status) " +
                "VALUES (?, ?, ?, ?);";
        PreparedStatement statement = connection.prepareStatement(insertQuery);
        statement.setString(1, booking.getConsumerID());
        statement.setInt(2, booking.getBookingID());
        statement.setString(3, booking.getDeliveryStatus());
        statement.setString(4, booking.getPaymentStatus());
        statement.executeUpdate();
    }

    public static Map<String, Consumer> getAllConsumers() throws SQLException {
        Map<String, Consumer> consumers = new HashMap<>();
        String selectQuery = "SELECT * FROM consumers;";
        ResultSet resultSet = connection.createStatement().executeQuery(selectQuery);

        while (resultSet.next()) {
            String consumerID = resultSet.getString("consumer_id");
            String name = resultSet.getString("name");
            String address = resultSet.getString("address");
            String phone = resultSet.getString("phone");
            String gasName = resultSet.getString("gas_name");
            String usageDetails = resultSet.getString("usage_details");
            consumers.put(consumerID, new Consumer(consumerID, name, address, phone, gasName, usageDetails));
        }

        return consumers;
    }

    public static Booking getBooking(String consumerID, int bookingID) throws SQLException {
        String selectQuery = "SELECT * FROM bookings WHERE consumer_id = ? AND booking_id = ?;";
        PreparedStatement statement = connection.prepareStatement(selectQuery);
        statement.setString(1, consumerID);
        statement.setInt(2, bookingID);
        ResultSet resultSet = statement.executeQuery();

        if (resultSet.next()) {
            String deliveryStatus = resultSet.getString("delivery_status");
            String paymentStatus = resultSet.getString("payment_status");
            return new Booking(consumerID, bookingID, deliveryStatus, paymentStatus);
        }

        return null;
    }

    public static void updateBookingDeliveryStatus(String consumerID, int bookingID, String deliveryStatus) throws SQLException {
        String updateQuery = "UPDATE bookings SET delivery_status = ? WHERE consumer_id = ? AND booking_id = ?;";
        PreparedStatement statement = connection.prepareStatement(updateQuery);
        statement.setString(1, deliveryStatus);
        statement.setString(2, consumerID);
        statement.setInt(3, bookingID);
        statement.executeUpdate();
    }

    public static void updateBookingPaymentStatus(String consumerID, int bookingID, String paymentStatus) throws SQLException {
        String updateQuery = "UPDATE bookings SET payment_status = ? WHERE consumer_id = ? AND booking_id = ?;";
        PreparedStatement statement = connection.prepareStatement(updateQuery);
        statement.setString(1, paymentStatus);
        statement.setString(2, consumerID);
        statement.setInt(3, bookingID);
        statement.executeUpdate();
    }
    public static int getLatestBookingID() throws SQLException {
        int latestBookingID = 0;

        try (Connection connection = DriverManager.getConnection(DATABASE_URL, DATABASE_USERNAME, DATABASE_PASSWORD);
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("SELECT MAX(booking_id) AS max_booking_id FROM bookings;")) {

            if (resultSet.next()) {
                latestBookingID = resultSet.getInt("max_booking_id");
            }
        }

        return latestBookingID;
    }
}

