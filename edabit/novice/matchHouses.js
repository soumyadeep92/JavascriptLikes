function matchHouses(x)
{
    let no_of_matches=0;
    if(x==0)
    {
        return 0;
    }
    else
    {
        no_of_matches+=((6*x)-(x-1));
    }
    return no_of_matches;
}
console.log(matchHouses(87));