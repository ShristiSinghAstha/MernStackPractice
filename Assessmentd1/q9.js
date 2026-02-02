// 9. Create a voting system using closure that tracks yes and no votes.
function createVotingSystem() {
    let x = 0;
    let y = 0;    
    return {
        voteYes: function() {
            x++;
            return x;
        },
        voteNo: function() {
            y++;
            return y;
        }   
    };
}

const votingSystem = createVotingSystem();
console.log("Yes: ",votingSystem.voteYes());  
console.log("\nNo: ",votingSystem.voteNo());  

