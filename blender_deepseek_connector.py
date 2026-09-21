#!/usr/bin/env python3
"""
Blender + DeepSeek Integration
Generate 3D scenes, animations, and models using DeepSeek AI
"""

import bpy
import requests
import json
import os
import sys
from typing import Optional, Dict, Any

class DeepSeekBlenderConnector:
    """Connects Blender to DeepSeek AI for 3D generation"""
    
    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or os.getenv("DEEPSEEK_API_KEY")
        self.base_url = "https://api.deepseek.com/v1"
        self.model = "deepseek-chat"
        
    def generate_blender_script(self, prompt: str, context: str = "") -> str:
        """
        Generate Blender Python script from natural language description
        
        Args:
            prompt: Description of what to create
            context: Additional context (e.g., "warehouse", "factory", etc.)
        
        Returns:
            Python script ready to execute in Blender
        """
        
        system_prompt = """You are an expert Blender Python API developer. Generate complete, working Blender scripts.

Rules:
1. Generate valid bpy (Blender Python) code
2. Always include imports and clear_scene()
3. Use modern Blender 3.6+ API syntax
4. Add comments explaining key steps
5. Return ONLY the Python code, no markdown, no explanation
6. Ensure materials and lighting are included for visibility
7. Use proper units and realistic scales

Common patterns:
- Clear scene: bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete()
- Create mesh: bpy.ops.mesh.primitive_cube_add(), bpy.ops.mesh.primitive_uv_sphere_add(), etc.
- Materials: bpy.data.materials.new(name="Material"); obj.data.materials.append(material)
- Lighting: bpy.ops.object.light_add(type='SUN', location=(5, 5, 10))
- Camera: bpy.ops.object.camera_add(location=(7, -7, 5)); bpy.context.scene.camera = camera
"""

        user_prompt = f"""Create a Blender Python script that: {prompt}

Context: {context}

Generate complete executable code with:
- Scene cleanup
- All required objects
- Materials and textures
- Proper lighting
- Camera setup for good viewing angle
- Comments explaining the code
"""

        try:
            response = requests.post(
                f"{self.base_url}/chat/completions",
                headers={
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json"
                },
                json={
                    "model": self.model,
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_prompt}
                    ],
                    "max_tokens": 4000,
                    "temperature": 0.2
                },
                timeout=60
            )
            
            response.raise_for_status()
            data = response.json()
            script = data["choices"][0]["message"]["content"]
            
            # Clean up markdown code blocks if present
            script = script.replace("```python", "").replace("```", "").strip()
            
            return script
            
        except Exception as e:
            return f"# Error: {str(e)}\n# Please check your API key and internet connection"
    
    def generate_aoa_visualization(self) -> str:
        """
        Generate Blender script for AoA (Angle of Arrival) visualization
        Shows ceiling anchors, detection cones, and triangulation
        """
        
        prompt = """
Create a detailed Blender scene showing AoA (Angle of Arrival) positioning system in a warehouse:

1. WAREHOUSE ENVIRONMENT:
   - Create a warehouse room (20m x 15m x 8m) with floor and walls
   - Add industrial shelving along walls
   - Include a forklift and some pallet racks

2. AoA SYSTEM COMPONENTS:
   - Create 4 white ceiling-mounted anchor nodes (cylinder shape, 10cm diameter)
   - Position them at corners: (5,5,7.5), (15,5,7.5), (5,12,7.5), (15,12,7.5)
   - Add cyan LED glow effect to each anchor

3. DETECTION CONES:
   - Create 4 blue triangular cones extending down from each anchor
   - Cones should angle toward center where they intersect
   - Make cones semi-transparent (glass material, alpha=0.3)

4. TARGET OBJECT:
   - Create a forklift with small BLE beacon device on it
   - Add cyan pulsing light to the beacon

5. VISUALIZATION:
   - Show intersection point at (10, 8, 1) marked with red sphere
   - Add measurement lines showing distances from anchors
   - Include text labels: "Anchor 1", "Anchor 2", etc.

6. LIGHTING & CAMERA:
   - Add good lighting (Sun + Area lights)
   - Position camera for isometric warehouse view showing all anchors
   - Ensure good shadows for depth

Use modern Blender 3.6+ API with clean code and comments.
"""
        
        return self.generate_blender_script(prompt, "AoA technology demonstration for indoor positioning")
    
    def execute_script(self, script: str) -> bool:
        """
        Execute generated script in Blender
        
        Args:
            script: Python script to execute
            
        Returns:
            True if successful, False otherwise
        """
        try:
            exec(script)
            print(f"✓ Script executed successfully")
            return True
        except Exception as e:
            print(f"✗ Error executing script: {e}")
            return False
    
    def save_script(self, script: str, filepath: str) -> bool:
        """Save script to file for later use"""
        try:
            with open(filepath, 'w') as f:
                f.write(script)
            print(f"✓ Script saved to: {filepath}")
            return True
        except Exception as e:
            print(f"✗ Error saving script: {e}")
            return False


def generate_aoe_factory_demo():
    """
    Generate complete AoE factory visualization for your video
    """
    
    connector = DeepSeekBlenderConnector()
    
    print("Generating AoA Warehouse Visualization...")
    script = connector.generate_aoa_visualization()
    
    # Save script
    connector.save_script(script, "/Users/rampowiz/Documents/Testbook/Stream-Pro/clipboard/Locus screenshot/aoe_visualization.py")
    
    # Show script preview
    print("\n" + "="*60)
    print("GENERATED BLENDER SCRIPT (Preview):")
    print("="*60)
    print(script[:1500] + "..." if len(script) > 1500 else script)
    print("="*60)
    
    return script


def generate_custom_scene(description: str):
    """
    Generate any custom 3D scene using DeepSeek
    
    Args:
        description: Natural language description of what to create
    """
    
    connector = DeepSeekBlenderConnector()
    
    print(f"Generating: {description}")
    script = connector.generate_blender_script(description)
    
    # Save script
    connector.save_script(script, "/Users/rampowiz/Documents/Testbook/Stream-Pro/clipboard/Locus screenshot/custom_scene.py")
    
    print("\nGenerated script saved to: custom_scene.py")
    
    return script


# Example usage for your project:
if __name__ == "__main__":
    
    print("="*60)
    print("DEEPSEEK + BLENDER CONNECTOR")
    print("="*60)
    
    # Set your API key (get from DeepSeek dashboard)
    # os.environ["DEEPSEEK_API_KEY"] = "your-api-key-here"
    
    # Option 1: Generate AoA visualization
    # script = generate_aoe_factory_demo()
    
    # Option 2: Generate custom scene
    # script = generate_custom_scene("Modern factory with conveyor belts and robotic arms")
    
    print("\nTo use in Blender:")
    print("1. Set DEEPSEEK_API_KEY environment variable")
    print("2. Run generate_aoe_factory_demo() or generate_custom_scene()")
    print("3. Copy the generated script to Blender's Scripting tab")
    print("4. Click Run Script")
    print("\nGenerated scripts are saved in .py files")
