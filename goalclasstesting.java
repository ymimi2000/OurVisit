/* *****************************************************************************
 *  Description:
 *
 *
 **************************************************************************** */

import edu.princeton.cs.algs4.StdOut;


public class goalclasstesting {
    public static void main(String[] args) {

        // create a continous goal
        Step teststep = new Step(0, false, "Check housing listings");

        Step[] AllSteps = new Step[1];
        AllSteps[0] = teststep;

        String goaltitle = "Get a new house";

        Goal testContGoal = new Goal(AllSteps, goaltitle, visibility.publicvisibility);

        StdOut.print(testContGoal.accomplished);
        // create a finite goal
        Step test = new Step(50, false, "Check job listings online");
        Step test2 = new Step(50, false, "Create a LinkedIN account");

        Step[] AllSteps1 = new Step[2];
        AllSteps1[0] = test;
        AllSteps1[1] = test2;

        String goaltitle1 = "Get a new job";

        Goal testFinGoal = new Goal(AllSteps1, goaltitle1, visibility.publicvisibility);

        StdOut.print(testFinGoal.accomplished);
        StdOut.print("\n");

        test.accomplished = true;
        test2.accomplished = true;

        testFinGoal = new Goal(AllSteps1, goaltitle1, visibility.publicvisibility);
        StdOut.print(testFinGoal.accomplished);
    }
}
