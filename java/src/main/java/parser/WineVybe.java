package parser;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintWriter;
import java.util.Scanner;

public class WineVybe {
    public static void log(String message)
    {
        File beerFile = new File(System.getProperty("user.dir"));
        try
        {
            if (beerFile.exists())
            {
                File log = new File(beerFile, "vybe.sql");

                if (!log.exists())
                {
                    log.createNewFile();
                }
                try (PrintWriter writer = new PrintWriter(new FileOutputStream(log, true)))
                {
                    writer.println(message);
                }
                catch(FileNotFoundException e)
                {
                    System.out.println("File not found.");
                }
            }
        }
        catch (Exception e)
        {
            System.out.println("Unable to create log.txt");
        }
    }

    public void parse()
    {
        File beerItems = new File("./java/database/beer-datasets/winevybeBeer/wynevybeList.txt");
        try (Scanner content = new Scanner(beerItems))
        {
            log("INSERT INTO \"beer\"(\"name\", \"description\", \"image_url\")");
            log(" VALUES");
            while (content.hasNextLine())
            {
                String currentLine = content.nextLine();
                String[] informationParsed = currentLine.split("\\|");

                String name = informationParsed[0];
                String description = informationParsed[1];
                String image_url = informationParsed[2];

                log("('" + name + "', '" + description + "', '" + image_url + "'),");

            }
        }
        catch(FileNotFoundException e)
        {
            System.out.println("Problem with populate: " + e.getMessage());
        }
    }
}
