export function getScoreIn5System(score) {
    let res
    if(score >0 && score < 4)
        res= 2
    else if (score < 7)
        res= 3
    else if (score <10)
        res= 4
    else
        res= 5

    return res
}