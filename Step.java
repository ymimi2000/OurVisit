/* *****************************************************************************
 *  Description:
 *
 *
 **************************************************************************** */

public class Step {

    /*
    public static void main(String[] args) {

    }*/

    // each step contributes a certain percentage towards the goal
    public int percentage;
    // boolean to see if step is accomplished or not
    public boolean accomplished;
    // String for step's title
    public String stitle;

    public Step(int perc, boolean acc, String title) {
        percentage = perc;
        accomplished = acc;
        stitle = title;
    }


}
