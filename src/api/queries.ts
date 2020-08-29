export const queryProfile = ({ locale, id }) => `
query Profile {
    author(id: "${id}", locale: "${locale}") {
      sys {
        id
      }
      name
      resume
      socialMedia
      profilePic {
        title
        url
      }
      bio
      email
      phone
      jobsCollection(limit: 2) {
        items {
          sys {
            id
          }
          name
          title
          start
          end
          description
          skillsCollection {
            items {
              sys {
                id
              }
              name
            }
          }
          projectsCollection(limit: 5) {
            items {
              sys {
                id
              }
              title
              description 
              challenges
              contribution
              outcome
              comments
              date
              url
              skillsCollection {
                items {
                  sys {
                    id
                  }
                  name
                }
              }
            }
          }
        }
      }
      educationCollection(limit: 3) {
        items {
          sys {
            id
          }
          name
          dateStart
          dateEnd
          title
          institute
          description
        }
      }
    }
  }  
`
export const querySkills = `
query Skills{
    skillCollection(order:[type_DESC,years_ASC],where:{years_gte:1}){
      items{
        sys{
          id
        }
        name
        type
        years
      }
    }
  }
  `
export const queryProjects = `
query Projects {
  projectCollection(limit: 20, where: {url_exists:true}, order: date_ASC) {
    items {
      sys {
        id
      }
      title
      url
      date
      description
      challenges
      contribution
      preview {
        url
      }
      skillsCollection {
        items {
          name
        }
      }
    }
  }
}

`
