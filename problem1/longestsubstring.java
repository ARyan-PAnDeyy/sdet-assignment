// Given a string, find the length of the longest substring without repeating characters. For example, the longest substring without repeating letters for "abcabcbb" is "abc", for which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1


import java.util.Scanner;

public class longestsubstring {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string");
        String s = sc.nextLine();
        int left = 0;
        int ans =0;

        for ( int right = 0;right<s.length();right++){
            for (int i = left;i<right;i++){
                if(s.charAt(i)==s.charAt(right)){
                    left = i+1;
                    break;
                }
            }
            int length = right -left+1;

            if(length>ans){
                ans = length;
            }
        }
        System.out.println("Longest substring length "+ans);

        sc.close();
    }
}
        