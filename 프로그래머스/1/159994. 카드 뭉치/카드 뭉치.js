function solution(cards1, cards2, goal) {
    for(let i=0, j=0, k=0; i < goal.length ; i++) {
        switch(goal[i]){
            case cards1[j] :
                j++;
                break;
            case cards2[k] :
                k++; 
                break;
            default : 
                return "No";
        }
    }
    return "Yes";
}