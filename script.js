import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Date;

import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

public class OrdemDeServico {
    private String clientName;
    private String clientAddress;
    private String clientPhone;
    private String clientEmail;
    private String serviceType;
    private String serviceDescription;
    private String serviceProblem;
    private String serviceComputerInfo;
    private Date openDate;
    private Date expectedCompletionDate;
    private boolean authorization;
    private boolean termsAgreed;
    private String technicianSignature;

    // Construtor da classe
    public OrdemDeServico(String clientName, String clientAddress, String clientPhone, String clientEmail,
            String serviceType, String serviceDescription, String serviceProblem, String serviceComputerInfo,
            Date openDate, Date expectedCompletionDate, boolean authorization, boolean termsAgreed,
            String technicianSignature) {
        this.clientName = clientName;
        this.clientAddress = clientAddress;
        this.clientPhone = clientPhone;
        this.clientEmail = clientEmail;
        this.serviceType = serviceType;
        this.serviceDescription = serviceDescription;
        this.serviceProblem = serviceProblem;
        this.serviceComputerInfo = serviceComputerInfo;
        this.openDate = openDate;
        this.expectedCompletionDate = expectedCompletionDate;
        this.authorization = authorization;
        this.termsAgreed = termsAgreed;
        this.technicianSignature = technicianSignature;
    }

    // Método para gerar um PDF da ordem de serviço
    public void gerarPDF() throws DocumentException, IOException {
        Document document = new Document();
        PdfWriter.getInstance(document, new FileOutputStream("OrdemDeServico.pdf"));

        document.open();

        // Definindo fontes para os títulos e informações
        Font titleFont = new Font(Font.FontFamily.TIMES_ROMAN, 18, Font.BOLD);
        Font infoFont = new Font(Font.FontFamily.TIMES_ROMAN, 12, Font.NORMAL);

        // Adicionando informações do cliente
        document.add(new Paragraph("Dados do Cliente", titleFont));
        document.add(new Paragraph("Nome: " + this.clientName, infoFont));
        document.add(new Paragraph("Endereço: " + this.clientAddress, infoFont));
        document.add(new Paragraph("Telefone: " + this.clientPhone, infoFont));
        document.add(new Paragraph("E-mail: " + this.clientEmail, infoFont));
        document.add(new Paragraph(""));

        // Adicionando informações do serviço solicitado
        document.add(new Paragraph("Descrição do Serviço Solicitado", titleFont));
        document.add(new Paragraph("Serviço: " + this.serviceType, infoFont));
        document.add(new Paragraph("Descrição: " + this.serviceDescription, infoFont));
        document.add(new Paragraph("Problema: " + this.serviceProblem, infoFont));
        document.add(new Paragraph("Dados do Computador: " + this.serviceComputerInfo, infoFont));
        document.add(new Paragraph(""));

        // Adicionando informações da ordem de serviço
        document.add(new Paragraph("Ordem de Serviço", titleFont));
        document.add(new Paragraph("Data de Abertura: " + this.openDate.toString(), infoFont));
        document.add(new Paragraph("Data Prevista para Conclusão: " + this.expectedCompletionDate.toString(), infoFont));
        document.add(new Paragraph("Autorização de Serviço: " +
