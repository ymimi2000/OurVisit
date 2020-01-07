/* *****************************************************************************
 *  Description:
 *
 *
 **************************************************************************** */
enum visibility {
    publicvisibility, privatevisibility;
}

public class Goal {

    /*
    public static void main(String[] args) {

    }*/

    // goal modeled as a 1D array of steps
    public Step[] arr;
    // integer to represent type of goal, it equals the length of the steps
    // array, if it equals 1 and that step's percentage is 0 then it is a
    // continous goal, other than that it is a finite goal
    public int type;
    // integer to represent the goal's percentage which equals the sum of the
    // percentages of the accomplished steps
    public int goalperc;
    // boolean to see if goal has been accomplished
    public boolean accomplished;
    // string for goal title
    public String title;
    // visibility of goal
    public visibility vis;

    public Goal(Step[] steps, String goaltitle, visibility visibilityofgoal) {

        if (steps.length < 1) {
            throw new IllegalArgumentException("Not a valid goal, should have >= 1 step");
        }

        type = steps.length;

        vis = visibilityofgoal;

        title = goaltitle;

        arr = new Step[type];

        for (int i = 0; i < type; i++) {
            arr[i] = steps[i];

            if (arr[i].accomplished == true) {
                goalperc = goalperc + arr[i].percentage;
            }

        }

        if (goalperc == 100) {
            accomplished = true;
        }
        else {
            accomplished = false;
        }

    }
}
