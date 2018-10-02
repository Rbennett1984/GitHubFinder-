$(document).ready(function(){
    $('#searchUser').on('keyup',function(e){
        let username = e.target.value;
    
        //make request to github
        $.ajax({
            url:'https://api.github.com/users/'+username,
            data:{
                client_id:'6d6b5bd9512af3efe80c',
                clinet_secret:'0e985376d045d2691e935c7d6389769f02c03c52'
            }
        }).done(function(user){
          $('#profile').html(`
            <div class="panel panel-default">
                <div class="panel-heading">
                <h3 class="panel-title">${user.name}</h3>
            </div>
                <div class="panel-body">
                <div class= "row">
                     <div class="col-md-3">
                    <img class="thumbnail avatar" src="${user.avatar_url}">
                    <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
            </div>
            
                    <div class="col-md-9">
                        <span class="label label-default">Public repos: ${user.public_repos}</span>
                        <span class="label label-primary">Public gists: ${user.public_gists}</span>
                        <span class="label label-success">Followers: ${user.followers}</span>
                        <span class="label label-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </div>
                </div>
            </div>
        </div>       
          `);
        });
    });
});

