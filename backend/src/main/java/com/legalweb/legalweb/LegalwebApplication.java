package com.legalweb.legalweb;

import com.legalweb.legalweb.models.Client;
import com.legalweb.legalweb.models.Subscribed;
import com.legalweb.legalweb.repositories.AdminRepository;
import com.legalweb.legalweb.repositories.ArticleRepository;
import com.legalweb.legalweb.repositories.ClientRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LegalwebApplication {

	public static void main(String[] args) {
		SpringApplication.run(LegalwebApplication.class, args);
	}

	@Bean
	public CommandLineRunner initData(AdminRepository adminRepository, ArticleRepository articleRepository, ClientRepository clientRepository) {
		return args -> {
			Client client = new Client("Martin", "martinsanchezr@gmail.com", "123456");
			clientRepository.save(client);

		};
	}
}

