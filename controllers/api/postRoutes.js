const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const postData = await Post.update({
      ...req.body,
      user_id: req.session.user_id,
    }, 
    {
      where: {
      id: req.params.id
    }
  });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy(
    {
      where: {
      id: req.params.id
    }
   });

    res.status(200).json(postData);
    } catch (err) {
    res.status(400).json(err);
    }
});

module.exports = router;
