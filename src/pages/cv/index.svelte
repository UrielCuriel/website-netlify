<script lang="ts">
  import { onMount } from "svelte"
  import { queryProfile, querySkills } from "../../api/queries"
  import { converter } from "../../utils/showdown"
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
  let data: Author
  let skills: {
    [x: string]: Skill[]
  }
  $: bio = data && converter.makeHtml(data.bio)
  $: resume = data && converter.makeHtml(data.resume)
  onMount(async () => {
    data = await fetch(
      "https://graphql.contentful.com/content/v1/spaces/z2zerwqbgp83?access_token=c8mJZPX9JYslaSSJYhLlddBzA-RKPQuS5l_kh2XFjng",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query: queryProfile }),
      },
    )
      .then((r) => r.json())
      .then((data) => data.data.author)
    skills = await fetch(
      "https://graphql.contentful.com/content/v1/spaces/z2zerwqbgp83?access_token=c8mJZPX9JYslaSSJYhLlddBzA-RKPQuS5l_kh2XFjng",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query: querySkills }),
      },
    )
      .then((r) => r.json())
      .then((data) =>
        (data.data.skillCollection.items as Skill[]).reduce((group, item) => {
          group[item["type"]] = [...(group[item["type"]] ?? []), item]
          return group
        }, {}),
      )
  })
</script>

<style global lang="postcss">
  @media print {
    @page {
      size: A4;
      margin: 10mm;
    }
    html,
    body {
      width: 210mm;
      height: 282mm;
      overflow: visible;
    }
 
    table {
      width: 190mm;
      page-break-inside: auto;
    }
    tr {
      page-break-inside: unset;
      page-break-after: auto;
    }
    p {
      page-break-inside: avoid;
    }
    thead {
      display: table-header-group;
    }
    tfoot {
      display: table-footer-group;
    }
  }
  table {
    border-spacing: theme("spacing.2") 0;
  }
  .page-break-before {
    page-break-before: always;
  }
</style>

{#if data}
  <table
    class="table-fixed w-full font-code mx-10 text-neutral-700 font-normal
    text-sm border-separate">
    <thead>
      <tr class="text-neutral-300 ">
        <th class="w-1/4 text-left py-10">{new Date().getFullYear()}</th>
        <th class="w-1/4 text-left py-10">Curriculum Vitae</th>
        <th class="w-1/4 text-center py-10">{data.name}</th>
        <th class="w-1/4 py-10">
          <div
            class="border-t-2 border-support-300 w-32 h-0 self-center
            justify-center m-auto" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-bold">Información Personal</td>
      </tr>
      <tr>
        <td class="text-right text-neutral-500">Nombre</td>
        <td class="font-bold text-lg" colspan="2">
          Uriel Fernando Curiel Martínez
        </td>
        <td rowspan="4" class="">
          <div class="h-32 w-32 rounded-full overflow-hidden m-auto">
            <img
              src={data.profilePic.url}
              alt={data.profilePic.title}
              class="h-full w-full" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="text-right text-neutral-500">Dirección</td>
        <td class="text-xs" colspan="2">
          Periférico Sur 7680, Granjas Coapa, Tlalpan, CDMX, México
        </td>
      </tr>
      <tr>
        <td class="text-right text-neutral-500">Teléfono Móvil</td>
        <td class="" colspan="2">{data.phone}</td>
      </tr>
      <tr>
        <td class="text-right text-neutral-500">Email</td>
        <td class="" colspan="2">{data.email}</td>
      </tr>
      <tr>
        <td class="font-bold">Biografia</td>
      </tr>
      <tr>
        <td class="border-r-2 border-primary-500 mr-2" />
        <td colspan="3">
          <div class="text-xs text-justify mr-6 Post ">
            {@html resume}
            {@html bio}
          </div>
        </td>
      </tr>
      <tr>
        <td class="font-bold">Educación</td>
      </tr>
      {#each data.educationCollection.items as education}
        <tr>
          <td class="text-right text-neutral-500">
            {new Date(education.dateStart).getFullYear()}-{education.dateEnd ? new Date(education.dateEnd).getFullYear() : 'ahora'}
          </td>
          <td colspan="3" class="font-bold ">
            <div class="mr-6">
              {education.institute} -
              <span class="opacity-75 text-xs ">{education.name}</span>
            </div>
          </td>
        </tr>
        <td class="border-r-2 border-primary-500 mr-2" />
        <td colspan="3">
          <div class="text-xs text-justify mr-6 Post ">
            {@html converter.makeHtml(education.description)}
          </div>
        </td>
      {/each}
      {#if skills}
        <tr>
          <td class="font-bold">Habilidades</td>
        </tr>
        <tr>
          <td class="align-top">
            {#each skills['lang'] as skill}
              <div>
                <p>
                  {skill.name}
                  <span class="text-xs opacity-75">
                    {skill.years} año{skill.years > 1 ? 's' : ''}
                  </span>
                </p>
                <div class="bg-support-100 relative w-full">
                  <div
                    class="h-1 bg-support-500"
                    style="width:{(skill.years * 100) / 6}%" />
                </div>
              </div>
            {/each}
          </td>
          <td class="align-top">
            {#each skills['frontend'] as skill}
              <div>
                <p>
                  {skill.name}
                  <span class="text-xs opacity-75">
                    {skill.years} año{skill.years > 1 ? 's' : ''}
                  </span>
                </p>
                <div class="bg-support-100 relative w-full">
                  <div
                    class="h-1 bg-support-500"
                    style="width:{(skill.years * 100) / 6}%" />
                </div>
              </div>
            {/each}
          </td>
          <td class="align-top">
            {#each skills['backend'] as skill}
              <div>
                <p>
                  {skill.name}
                  <span class="text-xs opacity-75">
                    {skill.years} año{skill.years > 1 ? 's' : ''}
                  </span>
                </p>
                <div class="bg-support-100 relative w-full">
                  <div
                    class="h-1 bg-support-500"
                    style="width:{(skill.years * 100) / 6}%" />
                </div>
              </div>
            {/each}
          </td>
          <td class="align-top ">
            {#each skills['db'] as skill}
              <div class="mr-6">
                <p>
                  {skill.name}
                  <span class="text-xs opacity-75">
                    {skill.years} año{skill.years > 1 ? 's' : ''}
                  </span>
                </p>
                <div class="bg-support-100 relative w-full">
                  <div
                    class="h-1 bg-support-500"
                    style="width:{(skill.years * 100) / 6}%" />
                </div>
              </div>
            {/each}
          </td>
        </tr>
      {/if}
      <tr>
        <td class="pt-40 pb-20" />
      </tr>
      <tr class="page-break-before">
        <td class="font-bold ">Empleos</td>
      </tr>
      {#each data.jobsCollection.items as job}
        <tr>
          <td class="text-sm text-right text-neutral-500">
            {new Date(job.start).getFullYear()}-{job.end ? new Date(job.end).getFullYear() : 'actualmente'}
          </td>
          <td class="text-sm font-bold " colspan="3">{job.title}</td>
        </tr>
        <tr>
          <td class="text-sm text-right text-neutral-500">Empresa</td>
          <td class="text-sm font-bold ">{job.name}</td>
        </tr>
        <tr>
          <td class="border-r-2 border-primary-500 mr-2" />
          <td colspan="3">
            <div class="text-xs text-justify mr-6 Post ">
              {@html converter.makeHtml(job.description)}
            </div>
          </td>
        </tr>
        <tr>
          <td class="text-sm text-right text-neutral-500">Tecnologias</td>
          <td class="text-xs text-justify " colspan="3">
            <div class="mr-6">
              {#each job.skillsCollection.items as skill}
                <div class="badge">{skill.name}</div>
              {/each}
            </div>
          </td>
        </tr>
        <tr>
          <td class="text-right">Projectos</td>
        </tr>
        {#each job.projectsCollection.items as project}
          <tr>
            <td class="text-sm text-right text-neutral-500">
              {new Date(project.date).getFullYear()}
            </td>
            <td class="text-sm font-bold " colspan="3">
              {project.title}
              <span class="font-normal text-primary-500">
                {project.url ?? ''}
              </span>
            </td>
          </tr>
          <tr>
            <td class="border-r-2 border-primary-500 mr-2" />
            <td colspan="3">
              <div class="text-xs text-justify mr-6 Post ">
                {@html converter.makeHtml(project.description)}
              </div>
            </td>
          </tr>
          {#if project.challenges}
            <tr>
              <td class="border-r-2 border-primary-500 mr-2" />
              <td colspan="3" class="Post">
                <h3>Retos</h3>
                <div class="text-xs text-justify mr-6 ">
                  {@html converter.makeHtml(project.challenges)}
                </div>
              </td>
            </tr>
          {/if}
          {#if project.contribution}
            <tr>
              <td class="border-r-2 border-primary-500 mr-2" />
              <td colspan="3" class="Post">
                <h3>Mis Contribuciones al proyecto</h3>
                <div class="text-xs text-justify mr-6 Post ">
                  {@html converter.makeHtml(project.contribution)}
                </div>
              </td>
            </tr>
          {/if}
          {#if project.outcome}
            <tr>
              <td class="border-r-2 border-primary-500 mr-2" />
              <td colspan="3" class="Post">
                <h3>Aprendizaje</h3>
                <div class="text-xs text-justify mr-6 Post ">
                  {@html converter.makeHtml(project.outcome)}
                </div>
              </td>
            </tr>
          {/if}
          {#if project.comments}
            <tr>
              <td class="text-sm text-right text-neutral-500">Comentarios</td>
              <td class="text-xs text-neutral-400 text-justify" colspan="3">
                <div class="mr-6">
                  {@html converter.makeHtml(project.comments)}
                </div>
              </td>
            </tr>
          {/if}
          <tr>
            <td class="text-sm text-right text-neutral-500">Tecnologias</td>
            <td class="text-xs text-justify " colspan="3">
              <div class="mr-6">
                {#each project.skillsCollection.items as skill}
                  <div class="badge">{skill.name}</div>
                {/each}
              </div>
            </td>
          </tr>
        {/each}
      {/each}
      <tr>
        <td class="h-screen" />
      </tr>
    </tbody>
  </table>
{/if}
