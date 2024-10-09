// URL https://api.github.com/users/JhonSsShell/repos
import axios from "axios";
import { useState, useEffect } from "react";
import { Projects } from "../body/Body";

const Peticion = () => {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        axios.get(`https://api.github.com/users/JhonSsShell/repos`)
            .then((response) => {
                console.log(response.data)
                setRepos(response.data);
            })
    }, [])

    return(
        <Projects>
            <article className="max-w-5xl my-0 mx-auto w-full h-full p-8 bg-red-200">
                {
                    repos.map((repo, index) => {
                        if (repo.name === "E-commerce-Api") {
                            return(
                                <div key={index}>
                                    <p>
                                        {repo.name}
                                    </p>
                                </div>
                            )
                        } else if (repo.name === "mdaSenaAnt") {
                            return (
                                <div key={index}>
                                    <p>
                                        {repo.name}
                                    </p>
                                    <a href={repo.html_url}>Proyecto</a>
                                </div>
                            )
                        } else if (repo.name === "PokeApi-ReactJs") {
                            return (
                                <div key={index}>
                                    <p>
                                        {repo.name}
                                    </p>
                                    <a href={repo.html_url}>Proyecto</a>
                                </div>
                            )
                        } else {
                            return
                        }
                    })
                }
            </article>
        </Projects>
    )
}

export default Peticion;