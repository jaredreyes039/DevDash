import '../../styles/components/repoMang/repomang.scss'

export default function RepoManager(){
    return(
        <>
                <fieldset name = 'create' className='repo-create'>
                    <legend htmlFor = 'create'>Create a Repo</legend>
                    <input type='text' placeholder = 'Repo Name' />
                    <input type = 'text' placeholder = 'Repo Branch' />
                    <textarea type = 'text' placeholder = 'Repo Description' />
                    <select name = 'Owner' placeholder = 'Select Owner'>
                        <option>Jaredreyes039</option>
                    </select>
                    <select name = 'Template' placeholder = 'Select a Template Repo'>
                        <option>TEMPLATE</option>
                    </select>
                    <label htmlFor='IncludeBranches'>Include All Branches?</label>
                    <input type='checkbox' className='check' name = 'IncludeBranches'></input>
                    <label htmlFor='Private'>Private Repo?</label>
                    <input className='check'  type='checkbox' name = 'Private'></input>
                </fieldset>
        </>
    )
}