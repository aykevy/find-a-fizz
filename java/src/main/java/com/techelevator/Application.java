package com.techelevator;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.Date;

@SpringBootApplication
public class Application {

    public static void main(String[] args)
    {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(BreweriesRepository breweriesRepository)
    {
        return args -> {
            Breweries b = new Breweries(
                    "Kevin Brewery OMEGALUL",
                    "Good Type",
                    "1234 Lakers Suck",
                    "Los Angeles",
                    "CA",
                    "69420",
                    "google.com",
                    "123-456-7891",
                    LocalDate.now(),
                    LocalDate.now(),
                    "USA",
                    null,
                    null,
                    null,
                    null,
                    "LA",
                    "kevins",
                    "brewin");
            //Save example.
            breweriesRepository.save(b);
        };
    }

}
