var cmdarea = document.getElementById('modalbody')

fetch('./commands.json')
    .then(resp => resp.json())
    .then((commands) => {

        commands.forEach((cmd,i) => {

            cmdarea.insertAdjacentHTML('beforebegin', `
            <p class="panel-heading">
                ${cmd.Command_type}
            </p>
            <p id="${i}" >
                
            </p>
        `)
            
            cmd.list.forEach((list,j)=>{

                console.log(cmd);
                console.log(cmd.Command_type);
                console.log(cmd.list);

                document.getElementById(i).insertAdjacentHTML('beforebegin',`
                <a  class="panel-block  ">
                    <span class="tag">
                        ${list.name}
                    </span>
                    --
                    <span class="tag">
                    ${list.description}
                    </span>
                </a>
                `)


            })
        });
    });

