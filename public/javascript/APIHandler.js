class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  //   router.get("/characters", (req, res, next) => {
  //     //Get all the characters info from http://localhost:8000/characters
  //     res.json({ "http://localhost:8000/characters" });
  //   });

  //   router.get("/characters/:id", (req, res, next) => {
  //     const { id } = req.params
  //     res.json({ `http://localhost:8000/characters/${id}` });
  //   });

  //   router.post("/characters", (req, res, next) => {
  //     try {
  //       const { name: string, occupation: string, cartoon: boolean, weapon: string } = req.body
  //       console.log(req.body);
  //     } catch (error) {
  //       next(error)
  //     }
  //   });

  //   router.patch("/characters/:id", async (req, res, next) => {
  //     try {
  //       const { id } = req.params
  //       const { name: string, occupation: string, cartoon: boolean, weapon: string } = req.body
  //       const updatedCharactere = await req.body.findByIdAndUpdate(id, req.body, {
  //         new: true,
  //       })
  //       res.json(updatedCharactere)
  //     } catch (error) {
  //       next(error)
  //     }
  //   })

  //   router.delete("/characters/:id", async (req, res, next) => {
  //     try {
  //       await req.body.findByIdAndDelete(req.params.id)

  //       res.json({ message: "Character has been successfully deleted" })
  //     } catch (error) {
  //       next("Character not found")
  //     }
  //   })
}
