import java.util.Scanner;

public class QuestionService {
    Question[] questions = new Question[5];
    String[] selection = new String[5];
    Scanner sc = new Scanner(System.in);

    public QuestionService() {
        questions[0] = new Question(1, "What is the size of an int in Java?", "A) 2 bytes", "B) 4 bytes", "C) 8 bytes",
                "D) 16 bytes", "B");
        questions[1] = new Question(2, "What is the size of a char in Java?", "A) 1 byte", "B) 2 bytes", "C) 4 bytes",
                "D) 8 bytes",
                "B");
        questions[2] = new Question(3, "What is the size of a double in Java?", "A) 4 bytes", "B) 8 bytes",
                "C) 16 bytes",
                "D) 32 bytes", "B");
        questions[3] = new Question(4, "What is the default size of a float in Java?", "A) 2 bytes", "B) 4 bytes",
                "C) 8 bytes",
                "D) 16 bytes", "B");
        questions[4] = new Question(5, "What is the size of a double in Java?", "A) 1 byte", "B) 2 byte",
                "C) 4 byte", "D) 8 byte", "D");
    }

    public void playQuiz() {
        for (int i = 0; i < questions.length; i++) {
            Question question = questions[i];
            System.out.print("Question no. : " + question.getId());
            System.out.println(" " + question.getQuestion());
            System.out.println(question.getOpt1());
            System.out.println(question.getOpt2());
            System.out.println(question.getOpt3());
            System.out.println(question.getOpt4());
            System.out.print("Enter your answer (A, B, C, D): ");
            selection[i] = sc.next().trim().toUpperCase();
            System.out.println("Your answer : " + selection[i]); // debug print
        }
    }

    public void printScore() {
        int score = 0;
        for (int i = 0; i < questions.length; i++) {
            Question question = questions[i];
            String actualAnswer = question.getAnswer();
            String userAnswer = selection[i];
            if (actualAnswer.equalsIgnoreCase(userAnswer)) {
                score++;
            }
        }
        System.out.println("Your score is: " + score);
        sc.close();
    }
}