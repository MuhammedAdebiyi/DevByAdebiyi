from django.db import models

class Solution(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=200)
    image = models.ImageField(upload_to='solutions/') 
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title