function tilesTeamwork(a,b)
{
    if(a<b && b-a<=6)
    {
        return true;
    }
    return false;
}
console.log(tilesTeamwork(5,1));