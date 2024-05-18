import { apiHandler, followupPlansRepo } from "/helpers/api";

export default apiHandler({
  get: getAll,
  post: create,
});

async function getAll(req, res) {
  const followupPlans = await followupPlansRepo.getAll();
  return res.status(200).json(followupPlans);
}

async function create(req, res) {
  await followupPlansRepo.create(req.body);
  return res
    .status(200)
    .json({ message: "Follow-up plan created successfully" });
}



