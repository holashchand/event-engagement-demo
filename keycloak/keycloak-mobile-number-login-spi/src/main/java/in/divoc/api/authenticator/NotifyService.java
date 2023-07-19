package in.divoc.api.authenticator;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.jboss.logging.Logger;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class NotifyService {
	private static final Logger logger = Logger.getLogger(NotifyService.class);
	private static final String notificationURL = System.getenv().getOrDefault("NOTIFICATION_SERVICE_URL",
			"http://128.199.28.17:8017/api/sendOTP?phone=");
	private static final String verificationURL = System.getenv().getOrDefault("VERIFICATION_SERVICE_URL",
			"http://128.199.28.17:8017/api/verifyOTP?phone=");
	private static final String messageTemplate = System.getenv().getOrDefault("MESSAGE_TEMPLATE",
			"Your OTP to access SunbirdRC portal is %s. Please dont share this with anyone.");
	private static final ObjectMapper objMapper = new ObjectMapper();

	public void notify(String to, String otp) throws IOException {

		try {
			URL url = new URL(notificationURL + to);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			con.setRequestProperty("accept", "application/json");
			con.setDoOutput(true);
			try (BufferedReader br = new BufferedReader(
					new InputStreamReader(con.getInputStream(), "utf-8"))) {
				StringBuilder response = new StringBuilder();
				String responseLine = null;
				while ((responseLine = br.readLine()) != null) {
					response.append(responseLine.trim());
				}
				System.out.println(response.toString());
			}
		} catch (IOException e) {
			logger.error(e);
		}

	}

	public boolean validateOTP(String mobileNumber, String otp) throws IOException {
		boolean isValid = false;
		try {
			URL url = new URL(verificationURL + mobileNumber + "&otp=" + otp);
			HttpURLConnection con = (HttpURLConnection) url.openConnection();
			con.setRequestMethod("GET");
			con.setRequestProperty("accept", "application/json");
			con.setDoOutput(true);
			try (BufferedReader br = new BufferedReader(
					new InputStreamReader(con.getInputStream(), "utf-8"))) {
				StringBuilder response = new StringBuilder();
				String responseLine = null;
				while ((responseLine = br.readLine()) != null) {
					response.append(responseLine.trim());
				}
				System.out.println(response.toString());
				JsonNode node = objMapper.readTree(response.toString());
				String status = node.get("status").get("status").asText();
				isValid = status.equals("success");
			}
		} catch (IOException e) {
			logger.error(e);
		}
		return isValid;
	}

	private String getMessage(String... args) {
		return String.format(messageTemplate, args);
	}

}