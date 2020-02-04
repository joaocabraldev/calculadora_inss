package br.com.joaocabral.calculadora_inss_fxhtml;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.layout.VBox;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

public class MainView extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("Calculadora INSS FX-HTML");
        WebView webView = new WebView();
        WebEngine engine = webView.getEngine();

        String indexFile = readFile("/web/index.html");
        
        engine.loadContent(indexFile, "text/html");

        VBox vBox = new VBox(webView);
        Scene scene = new Scene(vBox, 960, 600);

        primaryStage.getIcons().add(new Image(getClass().getResourceAsStream("/web/icons/icon.png")));
        primaryStage.setScene(scene);
        primaryStage.show();
    }
    
    private String readFile(String fileName) throws IOException {
        
        InputStream is = getClass().getResourceAsStream(fileName);
        InputStreamReader isr = new InputStreamReader(is);
        BufferedReader br = new BufferedReader(isr);
        StringBuffer sb = new StringBuffer();
        String line;
        while ((line = br.readLine()) != null) {
          sb.append(new String(line.getBytes("UTF-8")));
        }
        br.close();
        isr.close();
        is.close();
        return sb.toString();
        
    }

}
